package config

import (
	"github.com/spf13/viper"
	"os/user"
)

type AppConfig struct {
	Port        string
	DatabaseUrl string
	ApiKey      string
	Env         string
}

func ConfigInit() (*AppConfig, error) {

	usr, err := user.Current()
	if err == nil {
		viper.AddConfigPath(usr.HomeDir)
	}
	viper.AddConfigPath(".") // Path to the configuration file
	viper.AutomaticEnv()     // Allow environment variables to override config file settings

	if err := viper.ReadInConfig(); err != nil {
		return nil, err
	}

	var config AppConfig
	if err := viper.Unmarshal(&config); err != nil {
		return nil, err
	}

	return &config, nil
}
