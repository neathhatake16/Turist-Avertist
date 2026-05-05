package repositories

import "github.com/TuristAvertist/WCTproject/internal/models"

type VisitRepository interface {
	CreateVisit(visit *models.Visit) error
	ListByUser(userID uint) ([]models.Visit, error)
	GetVisitByID(id uint) (*models.Visit, error)
	UpdateStatus(id uint, status models.VisitStatus) error
	DeleteVisit(id uint) error
}
