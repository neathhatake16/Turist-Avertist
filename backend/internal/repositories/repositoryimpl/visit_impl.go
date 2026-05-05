package repositoryimpl

import (
	"github.com/TuristAvertist/WCTproject/internal/models"
	"github.com/TuristAvertist/WCTproject/internal/repositories"
	"gorm.io/gorm"
)

type visitRepository struct {
	db *gorm.DB
}

func NewVisitRepository(db *gorm.DB) repositories.VisitRepository {
	return &visitRepository{
		db: db,
	}
}

func (r *visitRepository) CreateVisit(v *models.Visit) error {
	if err := r.db.Create(v).Error; err != nil {
		return err
	}
	return r.db.Preload("Site").First(v, v.ID).Error
}

func (r *visitRepository) ListByUser(userID uint) ([]models.Visit, error) {
	var visit []models.Visit
	err := r.db.Preload("Site").
		Where("user_id = ?", userID).
		Order("visit_date asc").Find(&visit).Error
	return visit, err
}

func (r *visitRepository) GetVisitByID(id uint) (*models.Visit, error) {
	var v models.Visit
	return &v, r.db.First(&v, id).Error
}
func (r *visitRepository) UpdateStatus(id uint, status models.VisitStatus) error {
	return r.db.Model(&models.Visit{}).Where("id = ?", id).Update("status", status).Error

}

func (r *visitRepository) DeleteVisit(id uint) error {
	return r.db.Delete(&models.Visit{}, id).Error
}
