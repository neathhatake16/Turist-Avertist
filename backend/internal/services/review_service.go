package services

import (
	"errors"

	"github.com/TuristAvertist/WCTproject/internal/models"
	"github.com/TuristAvertist/WCTproject/internal/repositories"
)

type ReviewService interface {
	Create(userID uint, req models.CreateReviewRequest) (*models.Review, error)
	Delete(id uint) error
}

type reviewService struct {
	repo repositories.ReviewRepository
}

func NewReviewService(repo repositories.ReviewRepository) ReviewService {
	return &reviewService{
		repo: repo,
	}
}

func (s *reviewService) Create(userID uint, req models.CreateReviewRequest) (*models.Review, error) {
	if exists, err := s.repo.ExistsByUserAndSite(userID, req.SiteID); err != nil {
		return nil, err
	} else if exists {
		return nil, errors.New("review already exists")

	}
	reviews := &models.Review{
		UserID:  userID,
		SiteID:  req.SiteID,
		Rating:  req.Rating,
		Comment: req.Comment,
	}
	return reviews, s.repo.Create(reviews)
}

func (s *reviewService) Delete(id uint) error {
	return s.repo.DeleteByID(id)
}
