import React,{useState,useEffect} from 'react';
import { useLocation } from "react-router-dom";
import styled from 'styled-components';
import ReactModal from 'react-modal';
import { AiFillCloseCircle } from 'react-icons/ai';
import {FaPlay,FaPlus} from 'react-icons/fa';
import ThumnailBox from '../components/ThumnailBox'

import {useSelector,useDispatch} from 'react-redux'
import {seriesAction , movieAction} from '../redux/content/content.action'
import Carousel from 'react-elastic-carousel';





const MainContainer = styled.div`
   
    
`

const DetailContainer = styled.div`
   color:grey;;
   display:grid;
   grid-template-columns:30% 70%;
   max-width:90vw;
   margin:auto;
   background-color: #000000;
    
   
   

    
`
const MovieDetails = styled.div`
    background-color:black;
    box-shadow:  70px 0px 50px 25px rgba(0,0,0,1); 
    padding-top:150px;
    cursor: default;
    
    
    z-index:5;

    h3{
        font-size:25px;
        font-weight:800;
        font-family: 'Dosis', sans-serif;
    }

    
    .genres-year{
        display:flex;
        font-weight:500;
        justify-content:space-between;
        padding-right:20px;
        font-size:11px;
        margin-top:-15px;
        
    }
    .play-watchlist{
        display:flex;
     
        justify-content:space-between;
        padding-right:20px;
        font-size:11px;
        margin-top:60px;
        
   
    }
    .video-play-button{
        background-color:transparent;
        outline:none;
        border:none;
        color:grey;
        font-size:22px;
        font-weight:600;
        padding-bottom:12px;
        cursor: pointer;
        transition-duration:0.5s;
        :hover{
            color:white;

        }
        
    }

    .watchlist{
        color:grey;
        background-color:transparent;
        outline:none;
        border:none;
        font-size:20px;
        cursor: pointer;
        transition-duration:0.5s;
        :hover{
            color:white;
        }
    }
    #watchlist-text{
        font-size:10px;
    }
    
`
const MovieImage = styled.div`
    box-shadow: rgba(0, 0, 0, 0.9) 5px 5px 55px inset;
    
    float:right;
    img{
        max-width:100%;
        min-height:80vh;
        max-height:90vh;
        
        /* filter: drop-shadow(0px 6px 3px red); */
        box-shadow: red 5px 5px 55px inset;
        border-radius:8px;
        
        
    
        
        
    }



`

const IframeVideo = styled.iframe`
    width:95vw;
    height:100vh;
    border:none;
    top:-50px;
    object-fit:cover;
    
`
const FullScreen = styled.div`
    .close-button{
        position:absolute;
        top:5px;
        right:5px;
        color:grey;
        border:none;
        outline:none;
        background-color:transparent;
        font-size:45px;
        cursor: pointer;
        transition-duration:0.5s;
        :hover{
            color:#cacaca;
            
        }
    }
    
    .ytp-chrome-top{
        display:none !important;
    }
    .ytp-show-cards-title{
        display:none !important;
    }

`

const FirstSection = styled.div`
        padding-top:40px;

`
const Down = styled.div`
    #slide-type{
        padding-left:50px;
        font-weight:600;
        margin-bottom:-2px;
    }
    .rec.rec-arrow {
        color:rgba(207,0,15,0.8);
        background-color:transparent;
        
        
    
}
    .rec.rec-arrow:hover{
        color:red;
        background-color:rgba(0,0,0,0.5);
        border:none;
    
}
    .rec-arrow-right{
        background-color:transparent;
        border:none;
        outline:none;
        
        position:absolute;
        right:0;
    }
    .rec-arrow-left{
        background-color:transparent;
        border:none;
        outline:none;
        
        position:absolute;
        left: -20px;
        z-index:13;
    }
    .rec-slider{
        margin-left:-25px;
        margin-right:-20px;
    }

    .rec-item-wrapper{
        margin-right:-25px;
        margin-left:-5px;
    }
    .rec-pagination{
        display:none;
    }
    


`


function DetailScreen() {

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
        { width: 850, itemsToShow: 3 },
        { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
        { width: 1450, itemsToShow: 5 },
        { width: 1750, itemsToShow: 6 },
      ]

    const seriesSelector = useSelector(state => state.seriesDetails)
    const movieSelector = useSelector(state => state.movieDetails)
    const dispatch = useDispatch()

    
    const {movieDetails} = movieSelector
    const {loading,seriesDetails} = seriesSelector
    // const {loading,movieDetails} = movieSelector
    useEffect(() => {
        dispatch(seriesAction())
        dispatch(movieAction())
        
    }, [dispatch])


    const [item, setItem] = useState('')
    

    const location = useLocation()

    useEffect(()=>{

        
        const item = location.state?.item
        // console.log(item)
        setItem(item)

    },[item,location])
   
    
    
    // console.log(seriesDetails);


    const [model, setModel] = useState(false)
    

    
    // console.log(movieDetails&&movieDetails.filter(items => items.genres.includes(item.genres.split(',')[0]||item.genres.split(',')[1])))
    // console.log(seriesDetails&&seriesDetails.filter(items => items.genres.includes(item.genres.split(',')[0]||item.genres.split(',')[1])))
    // console.log(item.genres.split(',')[0]||item.genres.split(',')[1]);

    // const suggestionList = seriesDetails? seriesDetails&&seriesDetails.filter(items => items.genres.includes(item.genres.split(',')[0]||item.genres.split(',')[1])).concat(movieDetails&&movieDetails.filter(items => items.genres.includes(item.genres.split(',')[0]||item.genres.split(',')[1]))):'hello'
    
    
    
   
    return (
        <MainContainer>
              {item? 
              <div>
          
                <DetailContainer  >
                        
                    
                        
                        <MovieDetails>
                            <h3>{item.title}</h3>
                            <div className='genres-year'>
                                <p >{item.genres}</p>
                                <p>{item.releaseDate.slice(0,4)}</p>
                                
                                </div>
                            
                            <p>{item.description}</p>

                            <div className='play-watchlist'>
                                
                                <button className='video-play-button' onClick={()=>setModel(true)} > <FaPlay/> Watch Now</button>
                                <button className="watchlist"  > <FaPlus/> <p id="watchlist-text" >WATCHLIST</p> </button>

                            </div>
                            
                        </MovieDetails>
                        
                        
                        
                        <MovieImage>
                            <img src={item.poster} alt={item.poster} />
                        </MovieImage>


                        
                </DetailContainer>
                    <Down>
                        <FirstSection>
                            {loading?<h2>LOading</h2>:seriesDetails&&
                                
                                <Carousel breakPoints={breakPoints}  >
                                    {item.currentSeason
                                    ?loading?<h2>LOading</h2>:seriesDetails&&seriesDetails.filter(items => items.genres.includes(item.genres.split(',')[0]||item.genres.split(',')[1])).slice(0,8).map((item)=> <ThumnailBox key={item.id} item={item}/>)
                                    :loading?<h2>LOading</h2>:movieDetails&&movieDetails.filter(items => items.genres.includes(item.genres.split(',')[0]||item.genres.split(',')[1])).slice(0,8).map((item)=> <ThumnailBox key={item.id} item={item}/>)
                                    }
                                    
                                </Carousel>}

                        </FirstSection>
                        </Down>

                
                <ReactModal  ariaHideApp={false} isOpen={model}  onRequestClose={()=>setModel(false)} 
                style={{
                    overlay: {
                      position: 'fixed',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: 'rgba(0,0,0,0.8)',
                      zIndex:20,
                      

                    },
                    content: {
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      right: '40',
                      bottom: '0',
                      
                      background: 'black',
                      overflow: 'auto',
                      WebkitOverflowScrolling: 'touch',
                      
                      outline: 'none',
                      border:'none',
                      padding: '20px',
                      zIndex:20,
                    }
                  }}
            
            >
                 
                <FullScreen>
                    <IframeVideo src={item.link+"?autoplay=1&loop=1&controls=0&showinfo=0"} >
                        

                    </IframeVideo>
                    <button  className='close-button' onClick={()=>setModel(false)} > <AiFillCloseCircle/> </button>
                 </FullScreen>
                 
            </ReactModal>
            </div>
:<h2>Loading</h2>}
        
        </MainContainer>
    )
}

export default DetailScreen
