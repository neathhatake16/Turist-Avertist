package repositories

import "github.com/TuristAvertist/WCTproject/internal/models"

type UserRepository interface {
	Create(user *models.User) error
	FindByEmail(email string) (*models.User, error)
	FindByID(id uint) (*models.User, error)
}
