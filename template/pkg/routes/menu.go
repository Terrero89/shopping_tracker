package routes

//
//import (
//	"github.com/gofiber/fiber/v2"
//)
//
//type Menu struct {
//	Id    string `json:"id"`
//	Food  string `json:"food"`
//	Price int    `json:"price"`
//}
//
//var aLaCarte = []Menu{
//	{"1", "Fish", 15}, {"2", "steak", 35}, {"3", "lamp", 25},
//}
//
//func GetFood(c *fiber.Ctx) error {
//	// Your code to get user details
//	return c.JSON(aLaCarte)
//}
//
//func GetFoodById(c *fiber.Ctx) error {
//	id := c.Params("id")
//
//	for _, a := range aLaCarte {
//		if a.Id == id {
//			return c.JSON(a) // Return the found food item as JSON
//		}
//	}
//
//	// If food item is not found, return an appropriate error response
//	errorResponse := fiber.Map{
//		"error": "Food not found",
//	}
//	return c.Status(fiber.StatusNotFound).JSON(errorResponse)
//}
//
//func GetNames(c *fiber.Ctx) error {
//	// Your code to get user details
//	return c.SendString("NAmes list here")
//}
