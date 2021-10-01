import React, { Component } from 'react'
import AxiosService from '../../../axios/AxiosService'

export default class ListCountries extends Component {
    constructor(props) {
        super(props)

        this.state = {
            countries: []
        }
    }

    componentDidMount() {
        this.listCountries();
    }

    listCountries=()=>{
        AxiosService.getAllCountriesList().then((res)=> {
            this.setState({ countries: res.data });
        })
    }

    // code from www.w3schools.com
    searchCountries=()=> {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("searchCountryInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("countriesTable");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[0];
          if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          }       
        }
      }


    render() {
        return (
            <div className="container-fluid d-flex justify-content-center">

                <div style={{overflow: "scroll", maxHeight: "800px", width: "800px", maxWidth: "800px"}}>
                <table className="table table-dark table-hover" id="countriesTable" style={{maxWidth: "800px"}}>
                <br/>
                <thead className="sticky-top shadow-lg">
                    <tr>
                    <th><input type="search" id="searchCountryInput" className="table-search-input form-control" onKeyUp={this.searchCountries} placeholder="Search country..." autoComplete="off" /></th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    { 
                    this.state.countries.length === 0 
                    ?
                    <p className="animate__animated animate__fadeIn animate__infinite">Loading...</p>
                    :
                    this.state.countries.map(country => 
                        <tr key = { country.id } className="shadow">
                            <td><img src={`data:image/png;base64,${country.countryFlag}`} width="auto" height="30px" alt="flag" /> { country.countryName } - { country.countryAlpha2Code }</td>
                            <td><a href={`https://www.google.com/search?q=${country.countryName + " " + country.countryAlpha2Code}`} target="_blank" rel="noreferrer"><i className="bi bi-search"></i></a></td>
                        </tr>
                    ) 
                    }
                </tbody>
                </table>
                </div>
                
            </div>
 
        )
    }
}
