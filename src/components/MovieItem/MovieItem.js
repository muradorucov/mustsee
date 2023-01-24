import React, { useState }
    from 'react';
import {
    Alert,
    AlertIcon,
    Stack
} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux';
import { addToList } from '../../store/actions/action';
import './MovieItem.css';



const MovieItem = (props) => {

    const [statusAdd, setStatusAdd] = useState(false)
    const [statusHave, setStatusHave] = useState(false)
    const dispatch = useDispatch()
    const { list } = useSelector(state => state)

    const addList = (paramProps) => {
        if (!list.find(item => item.imdbID === paramProps.imdbID)) {
            dispatch(addToList(props))
            setStatusAdd(true)
            setTimeout(() => {
                setStatusAdd(false)
            }, 900)
        } else {
            setStatusHave(true)
            setTimeout(() => {
                setStatusHave(false)
            }, 900)
        }



    }

    return (
        <article className="movie-item">
            {props?.Poster === "N/A" ?
                <img className="movie-item__poster"
                    src="https://media.comicbook.com/files/img/default-movie.png"
                    alt={props?.Title} />
                : <img className="movie-item__poster"
                    src={props?.Poster} alt={props?.Title} />
            }

            <div className="movie-item__info">
                <h3 className="movie-item__title">{props?.Title}&nbsp;({props?.Year})</h3>
                <button type="button" className="movie-item__add-button" onClick={() => { addList(props) }}>Add to list</button>
            </div>


            {statusAdd ? <div className='alert'>
                <Stack>
                    <Alert status='success' variant='solid' bgColor="blue.500">
                        <AlertIcon />
                        Added a movie to the list !
                    </Alert>
                </Stack>
            </div> : null}

            {statusHave ? <div className='alert'>
                <Stack>
                    <Alert status='error' variant='solid' >
                        <AlertIcon />
                        The movie is already in the list !
                    </Alert>
                </Stack>
            </div> : null}

        </article>
    )
}

export default MovieItem


