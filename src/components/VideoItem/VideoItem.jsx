import React from 'react';
import "./VideoItem.css"
import { MdOutlineDeleteForever } from "react-icons/md";
import { BiEditAlt } from "react-icons/bi";

const VideoItem = ({ video }) => {

    return (
        <li key={video.id} className='video-tarjeta'>
            <a href={video.video}>
                <div className={`imagen border-${video.categoria.toLowerCase().replace(/\s+/g, '')}`} style={{ backgroundImage: `url(${video.imagen})` }}></div>
            </a>
            <div className={`botones botones-${video.categoria.toLowerCase().replace(/\s+/g, '')}`} style={{ backgroundImage: `url(${video.imagen})` }}>
                <div className='button-card'><MdOutlineDeleteForever className='icono' />BORRAR</div>
                <div className='button-card'><BiEditAlt className='icono' />EDITAR</div>
            </div>


        </li>
    );
};

export default VideoItem;