package services

import (
	"errors"

	"github.com/TuristAvertist/WCTproject/internal/models"
	"github.com/TuristAvertist/WCTproject/internal/repositories"
	"gorm.io/gorm"
)

type VisitSevice interface {
	Create(userID uint, req models.CreateVisitRequest) (*models.Visit, error)
	ListByUser(userID uint) ([]models.Visit, error)
	UpdateStatus(id, userID uint, status models.VisitStatus) error
	Delete(id, userID uint) error
}

type visitService struct {
	repo repositories.VisitRepository
}

func NewVisitService(repo repositories.VisitRepository) VisitSevice {
	return &visitService{
		repo: repo,
	}
}

func (s *visitService) Create(userID uint, req models.CreateVisitRequest) (*models.Visit, error) {
	v := &models.Visit{
		SiteID:    req.SiteID,
		UserID:    userID,
		VisitDate: req.VisitDate,
		Notes:     req.Notes,
		Status:    models.STATUS_PLAN,
	}
	return v, s.repo.CreateVisit(v)
}

func (s *visitService) ListByUser(userID uint) ([]models.Visit, error) {
	return s.repo.ListByUser(userID)
}

func (s *visitService) UpdateStatus(id, userID uint, status models.VisitStatus) error {
	v, err := s.repo.GetVisitByID(id)
	if errors.Is(err, gorm.ErrRecordNotFound) {
		return errors.New("not found")

	}
	if err != nil {
		return err
	}
	if v.UserID != userID {
		return errors.New("")

	}
	return s.repo.UpdateStatus(id, status)
}

func (s *visitService) Delete(id, userID uint) error {
	v, err := s.repo.GetVisitByID(id)
	if errors.Is(err, gorm.ErrRecordNotFound) {
		return errors.New("not found")
	}
	if err != nil {
		return err
	}
	if v.UserID != userID {
		return errors.New("")
	}
	return s.repo.DeleteVisit(id)
}
