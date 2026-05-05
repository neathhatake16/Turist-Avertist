package services

import "github.com/TuristAvertist/WCTproject/internal/models"

type TouristService interface {
	List(f models.SiteFilter) ([]models.Site, int64, error)
	GetBySlug(slug string) (*models.Site, error)
	Create(req models.CreateSiteRequest) (*models.Site, error)
	Update(id uint, req models.UpdateSiteRequest) (*models.Site, error)
	Delete(id uint) error
}

type touristService struct {
	repo ropsitories.TouristRepository
}

func NewTouristService(repo repositories.TouristRepository) TouristService {
	return &touristService{
		repo: repo,
	}
}
