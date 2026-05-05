package repositories

import (
	"github.com/TuristAvertist/WCTproject/internal/models"
)

type SiteRepository interface {
	List(f models.SiteFilter) ([]models.Site, int64, error)
	GetBySlug(slug string) (*models.Site, error)
	GetByID(id uint) (*models.Site, error)
	Create(site *models.Site) error
	Update(site *models.Site) error
	Delete(id uint) error
}
