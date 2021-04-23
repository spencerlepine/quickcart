import React, { useEffect } from "react"
import { getGroceries } from "../../../actions/groceries"
import { useSelector, useDispatch} from "react-redux"

const Backup = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getGroceries())
    }, [dispatch])

    const groceries = useSelector(state => state.groceries)

    /*function convertToCSV(objArray) {
        let array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
        let str = '';

        // Filter out the extra keys - https://stackoverflow.com/questions/38750705/filter-object-properties-by-key-in-es6
        const allowed = ['name', 'purchase_price', 'purchase_size', 'serving_cost', 'category', 'last_purchase', 'priority', 'image'];

        // Get the headers from the first object
        for (const header in array[0]) {
            if (allowed.includes(header)) {
                str+=header + ","
            }
        }
        str = str.slice(0, str.length-1)
        str += '\r\n'
        
        for (var i = 0; i < array.length; i++) {
            let filteredObj = {}
            for (const prop in array[i]) {
                if (allowed.includes(prop)) {
                    if (typeof array[i][prop] === "object") {
                        filteredObj[prop] = array[i][prop]["$numberDecimal"]
                    } else { filteredObj[prop] = array[i][prop] }
                    
                }
            }

            var line = '';
            for (var index in filteredObj) {
                if (line !== '') line += ','

                line += filteredObj[index];
            }

            str += line + '\r\n';
        }

        return str;
    }*/

    function save(data, filename) {
        const groceryCount = data.length
        const jsonGroceries = JSON.stringify(groceries)
        //const csvFilteredGroceries = convertToCSV(data)

        data = jsonGroceries //csvFilteredGroceries

        if(!data) {
            console.error('Console.save: No data')
            return;
        }

        if(!filename) filename = 'console.json'

        if(typeof filtered === "object"){
            data = JSON.stringify(data, undefined, 4)
        }

        var blob = new Blob([data], {type: 'text/json'}),
            e    = document.createEvent('MouseEvents'),
            a    = document.createElement('a')

        if (data === "[null]") {
            alert("No items found!")
            return
        }

        alert(`Saving data for ${groceryCount} groceries items (${Math.round(blob.size / 1000)}kb)`)

        a.download = filename
        a.href = window.URL.createObjectURL(blob)
        a.dataset.downloadurl =  ['text/json', a.download, a.href].join(':')
        e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
        a.dispatchEvent(e)
    }

    const saveCart = () => {
        let todaysDate = new Date();
        const fileName = `${todaysDate.getMonth()}_${todaysDate.getDate()}_${todaysDate.getFullYear()}_Backup(Groceries).txt`
        save(groceries, [fileName])
    }

    return (
        <div>
            <button onClick={saveCart}>Export Data</button>
        </div>
    )
}

export default Backup
