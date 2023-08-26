package routes

import "github.com/gofiber/fiber/v2"

func UserLogin(c *fiber.Ctx) error {
	return c.SendString("Login Page here")

}
