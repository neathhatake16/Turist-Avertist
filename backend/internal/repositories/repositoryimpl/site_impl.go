package repositoryimpl

import (
	"fmt"
	"strings"

	"gorm.io/gorm"

	"github.com/TuristAvertist/WCTproject/internal/models"
	"github.com/TuristAvertist/WCTproject/internal/repositories"
)

type siteRepository struct {
	db *gorm.DB
}

func NewSiteRepository(db *gorm.DB) repositories.SiteRepository {
	return &siteRepository{
		db: db,
	}
}

func (r *siteRepository) List(f models.SiteFilter) ([]models.Site, int64, error) {
	q := r.db.Model(&models.Site{}).Preload("Reviews")

	if f.Search != "" {
		like := "%" + strings.ToLower(f.Search) + "%"
		q = q.Where("LOWER(name) LIKE ? OR LOWER(description) LIKE ? OR LOWER(province) LIKE ?", like, like, like)
	}
	if f.Type != "" {
		q = q.Where("type = ?", f.Type)
	}
	if f.Province != "" {
		q = q.Where("LOWER(province) LIKE ?", "%"+strings.ToLower(f.Province)+"%")
	}
	if f.Featured != nil {
		q = q.Where("featured = ?", *f.Featured)
	}

	validSorts := map[string]bool{"created_at": true, "name": true, "entry_fee": true, "province": true}
	sort := "created_at"
	if validSorts[f.Sort] {
		sort = f.Sort
	}
	order := "desc"
	if f.Order == "asc" {
		order = "asc"
	}
	q = q.Order(fmt.Sprintf("%s %s", sort, order))

	var total int64
	if err := q.Count(&total).Error; err != nil {
		return nil, 0, err
	}
	offset := (f.Page - 1) * f.Limit

	var sites []models.Site
	return sites, total, q.Limit(f.Limit).Offset(offset).Find(&sites).Error
}

func (r *siteRepository) GetBySlug(slug string) (*models.Site, error) {
	var s models.Site
	err := r.db.Preload("Reviews").Preload("Reviews.User").
		Where("slug = ?", slug).First(&s).Error
	return &s, err
}

func (r *siteRepository) GetByID(id uint) (*models.Site, error) {
	var s models.Site
	return &s, r.db.First(&s, id).Error
}

func (r *siteRepository) Create(s *models.Site) error {
	return r.db.Create(s).Error
}
func (r *siteRepository) Update(s *models.Site) error {
	return r.db.Save(s).Error
}
func (r *siteRepository) Delete(id uint) error {
	return r.db.Delete(&models.Site{}, id).Error
}
