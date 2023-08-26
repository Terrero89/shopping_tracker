package routes

import (
	"github.com/gofiber/fiber/v2"
)

type Profile struct {
	ID          string `json:"id"`
	UserId      string `json:"userId"`
	Name        string `json:"name"`
	LastName    string `json:"lastName"`
	Username    string `json:"username"`
	Email       string `json:"email"`
	Gender      string `json:"gender"`
	Age         string `json:"age"`
	Phone       string `json:"phone"`
	DateCreated string `json:"dateCreated"`
	dateUpdated string `json:"dateUpdated"`
	isAdmin     bool   `json:"isAdmin"`
	isActive    bool   `json:"isActive"`
}

var profiles = []Profile{
	
}

func GetProfiles(c *fiber.Ctx) error {

	return c.JSON(profiles)
}
