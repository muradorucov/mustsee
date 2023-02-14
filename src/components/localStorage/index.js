import React from 'react'

export const LocalStorage = () => {

    useEffect(() => {

        const localValue = JSON.parse(localStorage.getItem("mylist"));
        if (localValue.length) {

        }
    }, []);


    // useEffect(() => {
    //     localStorage.setItem("mylist", JSON.stringify(localList))
    // }, [localList])

}
