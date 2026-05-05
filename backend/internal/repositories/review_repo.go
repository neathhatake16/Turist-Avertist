package repositories

import "github.com/TuristAvertist/WCTproject/internal/models"

type ReviewRepository interface {
	Create(review *models.Review) error
	ExistsByUserAndSite(userID, siteID uint) (bool, error)
	DeleteByID(id uint) error
}
