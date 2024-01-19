import React from 'react';
import './Categories.css'
import SingleCategorie from './SingleCategorie';
import mobile from '../../Images/AllCategries/mobiles.png';
import vehicles from '../../Images/AllCategries/vehicles.png';
import property_for_sell from '../../Images/AllCategries/property.png';
import property_for_rent from '../../Images/AllCategries/property-for-rent.png';
import electronics_home_appliances from '../../Images/AllCategries/electronics-home-appliances.png';
import bikes from '../../Images/AllCategries/bikes.png';
import business_industrial_agriculture from '../../Images/AllCategries/business-industrial-agriculture.png';
import services from '../../Images/AllCategries/services.png';
import jobs from '../../Images/AllCategries/jobs.png';
import animals from '../../Images/AllCategries/animals.png';
import furniture_home_decor from '../../Images/AllCategries/furniture-home-decor.png';
import fashion_beauty from '../../Images/AllCategries/fashion-beauty.png';
import books_sports_hobbies from '../../Images/AllCategries/books-sports-hobbies.png';
import kids from '../../Images/AllCategries/kids.png';

const AllCategories = () => {
    const categories = [
        { name: "Mobile", image: mobile },
        { name: "Vehicles", image: vehicles },
        { name: "Property", image: property_for_sell },
        { name: "Rent", image: property_for_rent },
        { name: "Electronics", image: electronics_home_appliances },
        { name: "Bikes", image: bikes },
        { name: "Agriculture", image: business_industrial_agriculture },
        { name: "Services", image: services },
        { name: "Jobs", image: jobs },
        { name: "Animals", image: animals },
        { name: "Decor", image: furniture_home_decor },
        { name: "Fashion", image: fashion_beauty },
        { name: "Books", image: books_sports_hobbies },
        { name: "Kids", image: kids }
    ];

    return (
        <div>
            <br />
            <div className='container over'>
                <div className='row'>
                    <h3>All Categories</h3>
                </div>
                <br />
                <div className='row'>
                    {categories.map((category, index) => (
                        <div key={index} className='col-lg-2 col-md-2 col-sm-3 col-4'>
                            <SingleCategorie name={category.name} image={category.image} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AllCategories;
