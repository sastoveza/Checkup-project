import React from 'react';
import SearchResults from './SearchResults'
import { Card, Button, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'

class SearchList extends React.Component {

  // state = {
  //  doctors: []
  // }

  render() {
    // const searched = this.props.searched.toLowerCase()
    
    // // var filteredDocs= this.props.doctors.filter(doctor => doctor.name.toLowerCase().includes(searched) && JSON.parse(doctor.insurance).includes(insuranceSearch)  || doctor.city.toLowerCase().includes(searched) && JSON.parse(doctor.insurance).includes(insuranceSearch) || doctor.state.toLowerCase().includes(searched) && JSON.parse(doctor.insurance).includes(insuranceSearch) || doctor.zip.includes(this.props.searched) && JSON.parse(doctor.insurance).includes(insuranceSearch) || doctor.specialties.split(" ")[0].toLowerCase().includes(searched) && JSON.parse(doctor.insurance).includes(insuranceSearch)  )
 
    // var filteredDocs = this.props.alldoctors.filter(doctor => doctor.name.toLowerCase().includes(searched) || doctor.city.toLowerCase().includes(searched) || doctor.state.toLowerCase().includes(searched) || doctor.zip.includes(this.props.searched) || doctor.specialties.split(" ")[0].toLowerCase().includes(searched))
  
    const searchItems = this.props.filteredResults.map((doctor, index) => {
      return (<SearchResults key={index} doctor={doctor} history={this.props.history} />
    )})
    //const insuranceSearch = this.props.insuranceSearch
    

    // const searchItems = filteredDocs.map((doctor, index) => {
    //   return <SearchItem key={doctor.id} doctor={doctor} history={this.props.history}/>
    // })
    console.log(searchItems)
    return (
      <div classname="search-master">
          {searchItems}
         
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    filteredResults: state.doctors.filteredResults,
    isSearching: state.doctors.isSearching
  }
}
export default connect(mapStateToProps)(SearchList);


//  { this.props.isSearching ? "Searching..." : null }
          // { this.props.searchResults.length === 0 ? null : <div>
          //   <p></p>