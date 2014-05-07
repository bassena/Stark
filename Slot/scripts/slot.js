$(document).ready(function() {
    /**
    * Global variables
    */
    var completed = 0,
        imgHeight = 1368,
        posArr 	  = [
			 0, //CS logo
            76, //number 7 
            152, //star
            228, //banana
            304, //star
            380, //cherry
            456, //banana
            532, //cherry
            608, //Heritage logo
            684, //banana
            760, //cherry
            836, //banana
            912, //cherry
            988, //star
            1064, //cherry
            1140, //number 7
            1216, //cherry
            1292 //bar
        ];
		
         var posArr2 = [
			 0, //banana
            76, //number 7 
            152, //CS logo
            228, //banana
            304, //star
            380, //cherry
            456, //star
            532, //cherry
            608, //number 7
            684, //banana
            760, //cherry
            836, //banana
            912, //cherry
            988, //star
            1064, //cherry
            1140, //Heritage logo
            1216, //cherry
            1292 //bar
        ];
		
        var posArr3 = [
			 0, //banana
            76, //number 7 
            152, //bar
            228, //cherry
            304, //star
            380, //banana
            456, //star
            532, //cherry
            608, //Heritage logo
            684, //banana
            760, //cherry
            836, //banana
            912, //cherry
            988, //star
            1064, //cherry
            1140, //number 7 
            1216, //cherry
            1292 //CS logo
        ];
		
		
    
    var win1 = []; 
	var	win2 = []; 
	var	win3 = [];
	
	//CS logo
    win1[0] 	= 	win2[152] 	= 	win3[1292] 	= 1;
	
	//bar
	win1[1292] 	= 	win2[1292] 	= 	win3[152] 	= 2;
	
	//Heritage logo
	win1[608] 	= 	win2[1140] 	= 	win3[608] 	= 3;
	
	//number 7
    win1[76]	=
	win1[1140]	= 	win2[76] 	=
					win2[608] 	= 	win3[76]	=
									win3[1140]	= 4;
									
	//star
    win1[152] 	= 
	win1[304] 	= 
	win1[988] 	= 	win2[304] 	= 
					win2[456] 	= 
					win2[988] 	= 	win3[304] 	= 
									win3[456] 	= 
									win3[988] 	= 5;
									
	//banana
	win1[228] 	=
	win1[456]   =
	win1[684] 	= 
	win1[836] 	= 	win2[0]   	=
					win2[228] 	=
					win2[684] 	= 
					win2[836] 	= 	win3[0]   	=
									win3[380] 	=
									win3[684] 	= 
									win3[836] 	= 6;
									
	//cherry
	win1[380] 	=
	win1[532] 	=
	win1[760] 	=
	win1[912]  	=
	win1[1064] 	= 
	win1[1216] 	= 	win2[380]  	=
					win2[532] 	=
					win2[760] 	= 
					win2[912] 	=
					win2[1064] 	=
					win2[1216] 	= 	win3[228] 	=
									win3[532] 	=
									win3[760] 	=
									win3[912] 	=
									win3[1064]	= 
									win3[1216] 	= 7;
   
    /**
    * @class Slot
    * @constructor
    */
    function Slot(el, max, step) {
        this.speed = 0; //speed of the slot at any point of time
        this.step = step; //speed will increase at this rate
        this.si = null; //holds setInterval object for the given slot
        this.el = el; //dom element of the slot
        this.maxSpeed = max; //max speed this slot can have
        this.pos = null; //final position of the slot    

        $(el).pan({
            fps:30,
            dir:'down'
        });
        $(el).spStop();
    }

    /**
    * @method start
    * Starts a slot
    */
    Slot.prototype.start = function() {
        var _this = this;
		
		if(_this.el === "#slot1")
			$(_this.el).addClass('motion1');
		else if(_this.el == "#slot2")
			$(_this.el).addClass('motion2');
		else if(_this.el == "#slot3")
			$(_this.el).addClass('motion3');
        $(_this.el).spStart();
        _this.si = window.setInterval(function() {
            if(_this.speed < _this.maxSpeed) {
                _this.speed += _this.step;
                $(_this.el).spSpeed(_this.speed);
            } // if()
        }, 100); // window.setInterval()
    }; // Slot.prototype.start = function()

    /**
    * @method stop
    * Stops a slot
    */
    Slot.prototype.stop = function() {
        var _this = this,
            limit = 30;
        clearInterval(_this.si);
        _this.si = window.setInterval(function() {
            if(_this.speed > limit) {
                _this.speed -= _this.step;
                $(_this.el).spSpeed(_this.speed);
            }
            if(_this.speed <= limit) {
                _this.finalPos(_this.el);
                $(_this.el).spSpeed(0);
                $(_this.el).spStop();
                clearInterval(_this.si);
				if(_this.el === "#slot1")
					$(_this.el).removeClass('motion1');
				else if(_this.el == "#slot2")
					$(_this.el).removeClass('motion2');
				else if(_this.el == "#slot3")
					$(_this.el).removeClass('motion3');
                _this.speed = 0;
            }
        }, 100);
    }; // Slot.prototype.stop = function()

    /**
    * @method finalPos
    * Finds the final position of the slot
    */
    Slot.prototype.finalPos = function() {
        var el = this.el,
            el_id,
            pos,
            posMin = 2000000000,
            best,
            bgPos,
            i,
            j,
            k;

        el_id = $(el).attr('id');
        pos = document.getElementById(el_id).style.backgroundPosition;
        pos = pos.split(' ')[1];
        pos = parseInt(pos, 10);
        for(i = 0; i < posArr.length; i++) {
            for(j = 0;;j++) {
                k = posArr[i] + (imgHeight * j);
                if(k > pos) {
                    if((k - pos) < posMin) {
                        posMin = k - pos;
                        best = k;
						if(this.el === "#slot1")
							this.pos = posArr[i]; //update the final position of the slot
						if(this.el === "#slot2")
							this.pos = posArr2[i]; //update the final position of the slot
						if(this.el === "#slot3")
							this.pos = posArr3[i]; //update the final position of the slot
                    } //if()
                    break;
                } //if()
            } //for()
        } //for()

        best += imgHeight + 4;
        bgPos = "0 " + best + "px";
        $(el).animate({
            backgroundPosition:"(" + bgPos + ")"
        }, {
            duration: 200,
            complete: function() {
                completed ++;
            }
        });
    }; // Slot.prototype.finalPos = function()
    
    /**
    * @method reset
    * Reset a slot to initial state
    */
    Slot.prototype.reset = function() {
        var el_id = $(this.el).attr('id');
        $._spritely.instances[el_id].t = 0;
        $(this.el).css('background-position', '0px 4px');
        this.speed = 0;
        completed = 0;
        $('#result').html('');
    }; 

    function enableControl() {
        $('#control').attr("disabled", false);
    }

    function disableControl() {
        $('#control').attr("disabled", true);
    }

    function printResult() {
        var res;
        if(win1[a.pos] === win2[b.pos] && win1[a.pos] === win3[c.pos]) {
            res = "You Win!";
        } else {
            res = "You Lose";
        }
        $('#result').html(res);
    }// printResult()
	
	function calculateMoney() {
		var bet;
			
	
	}

    //create slot objects
    var a = new Slot('#slot1', 35, 1),
        b = new Slot('#slot2', 50, 2),
        c = new Slot('#slot3', 70, 3);

    /**
    * Slot machine controller
    */
    $('#control').click(function() {
        var x;
		var y;
        if(this.innerHTML == "Start") {
            a.start();
            b.start();
            c.start();
			this.innerHTML = "Reset";
			
			disableControl(); //disable control until the slots stop
			
			y = window.setTimeout(function() {
				a.stop();
				b.stop();
				c.stop();
				
				//check every 100ms if slots have stopped
				//if so, enable the control
				x = window.setInterval(function() {
					if(a.speed === 0 && b.speed === 0 && c.speed === 0 && completed === 3) {
						enableControl();
						window.clearInterval(x);
						printResult();
					}
				}, 100);
            }, Math.floor(Math.random() * (10000 - 7000 + 1)) + 7000);
            
        } else { //reset
            a.reset();
            b.reset();
            c.reset(); 
            this.innerHTML = "Start";
        }
    });	
});