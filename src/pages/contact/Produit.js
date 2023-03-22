import React from 'react';
import { useState, useEffect } from 'react';
import NavbarContact from '../../components/navbar/NavbarContact';
import SideBar from '../../components/sidebar/SideBar';
import './produit.scss';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import produitImage from "../../images/logoAmsaProduit.png";
import CatalogueService from '../../services/CatalogueService';
import { display } from '@mui/system';

const Produit = () => {

    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await CatalogueService.getCatalogues();
                setProducts(response.data);
                console.log(response);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

  return (
    <div className="listeProduits">
        <SideBar/>
        <div className="listeProduitsContainer">
            <NavbarContact />
            <div className="top">
                <h3>Liste de la Catalogue de Produit AMSA</h3>
            </div>
            <div className="datatable">
                <div className="datatableTitle"></div>
                
                <div className="cardCatalogue">                
                    {products.map((product) => (
                    <Card style={{ width: '15rem' }} key={product.id}>
                        <Card.Body>
                            <Card.Img variant="top" src={produitImage} style={{ height: '100px'}} />
                            <Card.Title>Code: {product.codeCate}</Card.Title>
                            <Card.Text>
                                {product.libelle}
                            </Card.Text>
                            <Button variant="primary">Details</Button>
                        </Card.Body>
                    </Card> 
                    ))}            
                </div>

            </div>
        </div>
    </div>
  )
}

export default Produit