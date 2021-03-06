
function drawFunction(f, domRange, plotRange, plotPoints, colorVal, strokeWeightVal, dashVal, imagePos, imageSize){

	push();

		if (frameCount == 1) img = createGraphics(imageSize[0] , imageSize[1] );

		// Determinar la posicion del Origen de Coordenadas
		axesOrigin = [0 , 0];
		// posX
		if(plotRange[0][0] >= 0){ 
			axesOrigin[0] = imagePos[0];
		}
		else if (plotRange[0][0] < 0 && plotRange[0][1] > 0){
			delta = abs(plotRange[0][0])/(plotRange[0][1] - plotRange[0][0])*imageSize[0];
			axesOrigin[0] = imagePos[0] + delta;
		}
		else{
			axesOrigin[0] = imagePos[0] + imageSize[0];
		}
		// posY
		if(plotRange[1][0] >= 0){ 
			axesOrigin[1] = imagePos[1] + imageSize[1];
		}
		else if (plotRange[1][0] < 0 && plotRange[1][1] > 0){
			delta = abs(plotRange[1][1])/(plotRange[1][1] - plotRange[1][0])*imageSize[1];
			axesOrigin[1] = imagePos[1] + delta;
		}
		else{
			axesOrigin[1] = imagePos[1];
		}		
		
		img.noFill();
		img.stroke(colorVal);
		img.strokeWeight(strokeWeightVal);

		plotStep = (plotRange[0][1]-plotRange[0][0])/plotPoints;

		limitsX = [0,0];

		if(domRange[0] < plotRange[0][0]){
			limitsX[0] = plotRange[0][0] - plotStep;
		}
		else{
			limitsX[0] = domRange[0] - plotStep;
		}
		if(domRange[1] > plotRange[0][1]){
			limitsX[1] = plotRange[0][1] + plotStep;
		}
		else{
			limitsX[1] = domRange[1] + plotStep;
		}

		push();
			img.drawingContext.setLineDash(dashVal);
			img.beginShape();
				for(var x = limitsX[0]; x <= limitsX[1]; x = x + plotStep){
					xPos = (x - plotRange[0][0])/(plotRange[0][1]-plotRange[0][0])*imageSize[0];
					yPos = imageSize[1] - (f(x) - plotRange[1][0])/(plotRange[1][1]-plotRange[1][0])*imageSize[1];
					img.curveVertex(xPos, yPos);
				}
			img.endShape();
		pop();


		image(img, imagePos[0], imagePos[1]);

		img.clear();

	pop();

}


function drawAxes(imagePos, imageSize, plotRange, textSizeVal, tickSize, tickDistance){

	push();

		// Determinar la posicion del Origen de Coordenadas
		axesOrigin = [0 , 0];
		// posX
		if(plotRange[0][0] >= 0){ 
			axesOrigin[0] = imagePos[0];
		}
		else if (plotRange[0][0] < 0 && plotRange[0][1] > 0){
			delta = abs(plotRange[0][0])/(plotRange[0][1] - plotRange[0][0])*imageSize[0];
			axesOrigin[0] = imagePos[0] + delta;
		}
		else{
			axesOrigin[0] = imagePos[0] + imageSize[0];
		}
		// posY
		if(plotRange[1][0] >= 0){ 
			axesOrigin[1] = imagePos[1] + imageSize[1];
		}
		else if (plotRange[1][0] < 0 && plotRange[1][1] > 0){
			delta = abs(plotRange[1][1])/(plotRange[1][1] - plotRange[1][0])*imageSize[1];
			axesOrigin[1] = imagePos[1] + delta;
		}
		else{
			axesOrigin[1] = imagePos[1];
		}

		// Dibujar los ejes
		stroke(0);
		line(imagePos[0], axesOrigin[1],
			imagePos[0] + imageSize[0], axesOrigin[1]);

		line(axesOrigin[0], imagePos[1],
			axesOrigin[0], imagePos[1] + imageSize[1]);		
		
		// TICKS X
		textAlign(CENTER, TOP);
		for(var i = 0; i < ticksX.length; i++){			
			if ( !Array.isArray(ticksX[i]) ){
				if(ticksX[i] == 0) continue;
				aux_tickPos = imagePos[0] + abs(ticksX[i] - plotRange[0][0])/(plotRange[0][1]-plotRange[0][0])*imageSize[0];
				stroke(0);
				line (aux_tickPos, axesOrigin[1] - tickSize, aux_tickPos, axesOrigin[1] + tickSize);
				noStroke();
				text(ticksX[i], 
				aux_tickPos, axesOrigin[1] + tickDistance);
			}
			else{
				if(ticksX[i][0] == 0) continue;
				aux_tickPos = imagePos[0] + abs(ticksX[i][0] - plotRange[0][0])/(plotRange[0][1]-plotRange[0][0])*imageSize[0];
				stroke(0);
				line (aux_tickPos, axesOrigin[1] - tickSize, aux_tickPos, axesOrigin[1] + tickSize);
				noStroke();
				text(ticksX[i][1], 
				aux_tickPos, axesOrigin[1] + tickDistance);
			}
		}
		// TICKS Y
		textAlign(RIGHT, CENTER);
		for(var i = 0; i < ticksY.length; i++){			
			if ( !Array.isArray(ticksY[i]) ){
				if(ticksY[i] == 0) continue;
				aux_tickPos = imagePos[1] + imageSize[1] - abs(ticksY[i] - plotRange[1][0])/(plotRange[1][1]-plotRange[1][0])*imageSize[1];
				stroke(0);
				line (axesOrigin[0] - tickSize, aux_tickPos, axesOrigin[0] + tickSize, aux_tickPos);
				noStroke();
				text(ticksY[i], 
				axesOrigin[0] - tickDistance, aux_tickPos);
			}
			else{
				if(ticksY[i][0] == 0) continue;
				aux_tickPos = imagePos[1] + imageSize[1] - abs(ticksY[i][0] - plotRange[0][0])/(plotRange[0][1]-plotRange[0][0])*imageSize[0];
				stroke(0);
				line (axesOrigin[0] - tickSize, aux_tickPos, axesOrigin[0] + tickSize, aux_tickPos);
				noStroke();
				text(ticksY[i][1], 
				axesOrigin[0] - tickDistance, aux_tickPos);
			}
		}

	pop();

}


function drawFPS(deltaTimeStep){
	// DRAW AVERAGE FRAMERATE
	if (frameCount == 1){
		deltaTime_Sum = 0;
		deltaTime_Av = 0;
	}
	deltaTimeStep = 50;
	deltaTime_Sum = deltaTime_Sum + deltaTime;
	if(frameCount % deltaTimeStep == 0){
		deltaTime_Av = deltaTime_Sum / deltaTimeStep;
		text(deltaTime_Av.toFixed(1), 0, 10);
		deltaTime_Sum = 0;
	}
	else{
		text((1000./deltaTime_Av).toFixed(1), 0, 10);
	}
}

