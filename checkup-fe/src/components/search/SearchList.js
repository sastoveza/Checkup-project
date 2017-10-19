import React from 'react';
import SearchItem from './SearchItem'

class SearchList extends React.Component {

  // state = {
  //  doctors: []
  // }

  render() {
    console.log(this.props)
    const searchItems = this.props.searchResults.map((doctor, index) => {
      return <SearchItem key={index} doctor={doctor} />
    })
    //const insuranceSearch = this.props.insuranceSearch
    //const searched = this.props.searched.toLowerCase()
    // console.log(this.props)
  //   if (insuranceSearch !== ""){
  //   var filteredDocs= this.props.doctors.filter(doctor => doctor.name.toLowerCase().includes(searched) && JSON.parse(doctor.insurance).includes(insuranceSearch)  || doctor.city.toLowerCase().includes(searched) && JSON.parse(doctor.insurance).includes(insuranceSearch) || doctor.state.toLowerCase().includes(searched) && JSON.parse(doctor.insurance).includes(insuranceSearch) || doctor.zip.includes(this.props.searched) && JSON.parse(doctor.insurance).includes(insuranceSearch) || doctor.specialties.split(" ")[0].toLowerCase().includes(searched) && JSON.parse(doctor.insurance).includes(insuranceSearch)  )
  // }else{
  //   filteredDocs = this.props.doctors.filter(doctor => doctor.name.toLowerCase().includes(searched) || doctor.city.toLowerCase().includes(searched) || doctor.state.toLowerCase().includes(searched) || doctor.zip.includes(this.props.searched) || doctor.specialties.split(" ")[0].toLowerCase().includes(searched))
  // }

    // const searchItems = filteredDocs.map((doctor, index) => {
    //   return <SearchItem key={doctor.id} doctor={doctor} history={this.props.history}/>
    // })
    return (
      <div className="ui cards">
        {searchItems}
      </div>
    )
  }

}
export default SearchList;
