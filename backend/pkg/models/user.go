package models

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
)

// User represents a user document in MongoDB.
type User struct {
	ID       primitive.ObjectID `bson:"_id,omitempty"`
	Username string             `bson:"username"`
	Email    string             `bson:"email"`
}
