'use strict';

function Thermostat(){
  this.DEFAULT_START_TEMP = 20
  this._temperature = this.DEFAULT_START_TEMP
  this.TEMP_CHANGE = 1
  this.MIN_TEMP = 10
  this.MAX_LIMIT_PSM_OFF = 32
  this.MAX_LIMIT_PSM_ON = 25
  this.powerSavingMode = true
}

Thermostat.prototype.getTemperature = function() {
  return this._temperature;
};

Thermostat.prototype.increaseTemp = function() {
  if(this.isMaximumTemperature()) {return;}
  return this._temperature += this.TEMP_CHANGE;
};

Thermostat.prototype.decreaseTemp = function() {
  if(this._temperature === this.MIN_TEMP){return;}
  return this._temperature -= this.TEMP_CHANGE;
};

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this.powerSavingMode === true;
}

Thermostat.prototype.switchPowerSavingModeOn = function() {
  this.powerSavingMode = true;
};

Thermostat.prototype.switchPowerSavingModeOff = function() {
  this.powerSavingMode = false;
};

Thermostat.prototype.isMaximumTemperature = function() {
  if (this.isPowerSavingModeOn() === false) {
    return this._temperature === this.MAX_LIMIT_PSM_OFF;
  }
  return this._temperature === this.MAX_LIMIT_PSM_ON;
};

Thermostat.prototype.resetTemperature = function() {
  return this._temperature = this.DEFAULT_START_TEMP;
};

Thermostat.prototype.energyUsage = function() {
  if( this._temperature < 18 ){return "Green";}
  if( this._temperature > 24 ){return "Red";}
  return "Yellow";
};