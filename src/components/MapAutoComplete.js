import { AutoComplete } from 'antd'
import React, { Component } from 'react'

export default class MapAutoComplete extends Component {
    constructor(props) {
        super(props)
        this.state = {
            suggestions: [],
            dataSource: [],
            singaporeLatLng: this.props.singaporeLatLng,
            autoCompleteService: this.props.autoCompleteService,
            geoCoderService: this.props.geoCoderService,
        }
    }

    onSelect = ((value) => {
      this.state.geoCoderService.geocode({address:value}, ((response) => {
          const {location} = response[0].geometry
          this.props.addMarker(location.lat(),location.lng(),this.props.markerName)
      }))
    })

    handleSearch = ((value) => {
        const {autoCompleteService,singaporeLatLng} = this.state
        if (value.length > 0) {
            const searchQuery = {
                input: value,
                location: singaporeLatLng,
                radius: 30000,
            }
            autoCompleteService.getQueryPredictions(searchQuery,((response) => {
                if(response) {
                    const dataSource = response.map((resp) => resp.description)
                    this.setState({dataSource,suggestions:response})
                }
            }))
        }
    })
    render() {
        const {dataSource} = this.state
        return (
            <AutoComplete
            className="w-100"
            dataSource={dataSource}
            onSelect={this.onSelect}
            onSearch={this.handleSearch}
            placeholder="Address"
            />
                
            
        )
    }
}
