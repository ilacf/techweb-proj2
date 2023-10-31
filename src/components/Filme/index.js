import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import { Link } from "react-router-dom";

//  api: https://rapidapi.com/SAdrian/api/moviesdatabase/

const Filme = (props) => {
    const { Meta } = Card;
    const imagem = props.infos.primaryImage.url;
    const releaseYear = props.infos.releaseYear.year;
    const titulo = props.infos.titleText.text;

  return (
    <Card
        style={{
        width: 600,
        }}
        cover={
        <img
            alt="capa do filme"
            src={imagem}
        />
        }
    >
        <Link className="link" to={{
            pathname: `pagfilme/${titulo}`,
            state: {
                releaseYear: releaseYear,
                img: imagem                    
            }
        }}>
            <Meta
            title={titulo}
            description={`Release year: ${releaseYear}`}
            />
        </Link>
    </Card>
  );
};
export default Filme;
