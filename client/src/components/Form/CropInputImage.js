// import { useState, useEffect } from "react";

const CropInputImage = async (base64) => {
    return new Promise((res, rej) => {
        let image = new Image();
        image.src = base64

        image.onload = async () => {
            let canvas = document.createElement('canvas');
            let maxSize = 300;// TODO : pull max size from a site config
            let width = image.width;
            let height = image.height;
           
            let scale = Math.min((maxSize/width),(maxSize/height));
            let iwScaled = width*scale;
            let ihScaled = height*scale;
            let squareSize = Math.max(iwScaled, ihScaled)
            canvas.width = squareSize;
            canvas.height = squareSize; 
            
            // let centerImageX = 0 - (width - squareSize) / 2 
            // let centerImageY = 0 - (height - squareSize) / 2 

            canvas.getContext('2d').scale((maxSize/width),(maxSize/height));
            canvas.getContext('2d').drawImage(image, 0, 0, width, height);
            let dataUrl = await canvas.toDataURL('image/jpeg');
            res(dataUrl)
        }
    })
}

export default CropInputImage