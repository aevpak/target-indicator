function f(){

				pointer_img.width = parseInt(getComputedStyle(document.getElementById("target_indicator")).width)/20;
				pointer_img.height =parseInt(getComputedStyle(document.getElementById("target_indicator")).width)/20;
				pointer.style.display = "flex";
				pointer.style.flexDirection = "column";
				pointer.style.justifyContent = "flex-start"
				pointer.style.alignItems = "center";
				pointer.style.width = pointer_img.width;
				pointer.style.position = "absolute";
				pointer.style.top = parseInt(getComputedStyle(document.getElementById("border")).top) + parseInt(getComputedStyle(document.getElementById("frame")).height);
				pointer.style.left = parseInt(getComputedStyle(document.getElementById("border")).left) + parseInt(getComputedStyle(document.getElementById("border")).width) - parseInt(getComputedStyle(document.getElementById("pointer")).width)/2;
				marker = document.getElementById('pointer');
				border = document.getElementById('border');
				colored_border = document.getElementById('colored_border');
				marker.onmousedown = function(e) {				
				function getCoords(elem) {
				var box = elem.getBoundingClientRect();
				return {
					left: box.left + pageXOffset
				 };
				}
				pointerCoords = getCoords(marker);

				borderShiftX = parseInt(getComputedStyle(border).left);
				shiftX = e.pageX - pointerCoords.left;//+borderShiftX;
				borderCoords = getCoords(border);
				markerWidth = parseInt(getComputedStyle(marker).width);
				moveAt(e);
				
				  function moveAt(e) {
					 
					newLeft = e.pageX - shiftX - borderCoords.left;
					if (newLeft + markerWidth/2 < 0) {
					  newLeft = -markerWidth/2;
					}
					rightEdge = border.offsetWidth - marker.offsetWidth;
					if (newLeft - markerWidth/2 > rightEdge) {
					  newLeft = rightEdge+markerWidth/2;
					}
					
					marker.style.left =  1+ newLeft + borderShiftX + 'px';
					colored_border.style.width = -1.5 + parseInt(marker.style.left) - borderShiftX + markerWidth/2;				
					pointer_text.innerHTML = "$" + Math.ceil(parseInt(target_text.innerText.substring(1))*parseInt(getComputedStyle(document.getElementById("colored_border")).width)/parseInt(getComputedStyle(document.getElementById("border")).width));
					prom = parseInt(target_text.innerText.substring(1)) - parseInt(pointer_text.innerHTML.substring(1));
					if (prom == 0) {
						downline_text.innerHTML = "Target completed!"
					} else {
						downline_text.innerHTML = "You need " +  prom + "$ more to reach your target."
					}
					
				  }

				  document.onmousemove = function(e) {
					moveAt(e);
				  };

				  document.onmouseup = function() {
					document.onmousemove = null;
					document.onmouseup = null;
				  };

				}

				marker.ondragstart = function() {
				  return false;
				};
						}