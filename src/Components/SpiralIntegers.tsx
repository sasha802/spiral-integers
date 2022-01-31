import React from "react";
import { Directions } from "../Constants/Directions";
import { Create2DArray } from "../Utility/CreateMatrix";


const SpiralIntegers = (props: any) => {
  
    //set initial values
    const number: number = props.userNumber + 1
    const arraySize: number =  Math.ceil(Math.sqrt(number));
    let spiralIntegerMatrix: any = Create2DArray(arraySize);   
    const center: number = Math.ceil(arraySize / 2) - 1;
    let row: number = center;
    let col: number = center;
    let currentDirection = Directions.Right;

    let counter = new Map();
    counter.set(Directions.Right, 0);
    counter.set(Directions.Down, 0);
    counter.set(Directions.Left, 0);
    counter.set(Directions.Up, 0);

    let maxSteps = new Map();
    maxSteps.set(Directions.Right, 1);
    maxSteps.set(Directions.Down, 1);
    maxSteps.set(Directions.Left, 2);
    maxSteps.set(Directions.Up, 2);

    //build spiral integers matrix 
    for (let i = 0; i < number; i++) {

        spiralIntegerMatrix[row][col] = i;

        if(currentDirection === Directions.Right) {
            col++;
            let rightCounter = counter.get(Directions.Right) + 1;
            counter.set(Directions.Right, rightCounter);

            if (counter.get(Directions.Right) >= maxSteps.get(Directions.Right)) {
                currentDirection = Directions.Down
                let rightMaxSteps = maxSteps.get(Directions.Right) + 2;
                maxSteps.set(Directions.Right, rightMaxSteps);
                counter.set(Directions.Right, 0);
            }
                   
        } else if (currentDirection === Directions.Down) {
            row++
            let downCounter = counter.get(Directions.Down) + 1
            counter.set(Directions.Down, downCounter)

            if (counter.get(Directions.Down) >= maxSteps.get(Directions.Down)) {
                currentDirection = Directions.Left
                let downMaxSteps = maxSteps.get(Directions.Down) + 2;
                maxSteps.set(Directions.Down, downMaxSteps);
                counter.set(Directions.Down, 0);
            }         

        } else if (currentDirection === Directions.Left) {
            col--
            let leftCounter = counter.get(Directions.Left) + 1
            counter.set(Directions.Left, leftCounter)

            if (counter.get(Directions.Left) >= maxSteps.get(Directions.Left)) {
                currentDirection = Directions.Up
                let downMaxSteps = maxSteps.get(Directions.Left) + 2;
                maxSteps.set(Directions.Left, downMaxSteps);
                counter.set(Directions.Left, 0);
            }
            
        } else if (currentDirection === Directions.Up) {
            row--
            let upCounter = counter.get(Directions.Up) + 1
            counter.set(Directions.Up, upCounter)

            if (counter.get(Directions.Up) >= maxSteps.get(Directions.Up)) {
                currentDirection = Directions.Right
                let upMaxSteps = maxSteps.get(Directions.Up) + 2;
                maxSteps.set(Directions.Up, upMaxSteps);
                counter.set(Directions.Up, 0);
            }            
        }
    }

    return (
        <div>
            <h1>Spiral Integer {props.num}</h1>
            <div>
            {spiralIntegerMatrix.map((items: number[]) => {
                return (
                <div>
                    {items.map((subItems) => {
                        return <span> {subItems} </span>;
                    })}
                </div>
                );
            })}
            </div>
        </div>
    )
}

export default SpiralIntegers

