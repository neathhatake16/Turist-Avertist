package repositoryimpl

import (
	"github.com/TuristAvertist/WCTproject/internal/models"
	"github.com/TuristAvertist/WCTproject/internal/repositories"
	"gorm.io/gorm"
)

type reviewRepository struct {
	db *gorm.DB
}

func NewReviewRepository(db *gorm.DB) repositories.ReviewRepository {
	return &reviewRepository{
		db: db,
	}
}

func (r *reviewRepository) Create(review *models.Review) error {
	if err := r.db.Create(review).Error; err != nil {
		return err
	}
	return r.db.Preload("User").First(review, review.ID).Error
}

func (r *reviewRepository) ExistsByUserAndSite(userID, siteID uint) (bool, error) {
	var count int64
	err := r.db.Model(&models.Review{}).Where("user_id = ? AND site_id = ?", userID, siteID).Count(&count).Error
	return count > 0, err
}

func (r *reviewRepository) DeleteByID(id uint) error {
	return r.db.Delete(&models.Review{}, id).Error
}
