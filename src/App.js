import React, { Component } from 'react';
import './App.css'

class App extends Component {
  pageNum = 1
  state = {
    keyword: '',
    photos: []
  }
  getPhotos = async () => { 
    const data = await fetch(`https://api.unsplash.com/search/photos?page=${this.pageNum}&query=${this.state.keyword}&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}&per_page=20`)
    const dataJson = await data.json()
    return dataJson.results
  }
  handleChange = (e) => {
    this.setState({ keyword: e.target.value })
  }
  searchPhotos = async (e) => {
    e.preventDefault()
    const photosContainer = document.querySelector('.App-photo-container')
    photosContainer.scrollTop = 0
    const photos = await this.getPhotos()
    console.log(photos)
    this.setState({ photos })
  }
  handleScroll = async () => {
    const photosContainer = document.querySelector('.App-photo-container')
    if(photosContainer.scrollTop + photosContainer.clientHeight === photosContainer.scrollHeight){
      console.log('bottom of page !')
      this.pageNum++
      const photos = await this.getPhotos()
      console.log([...this.state.photos, ...photos])
      this.setState({ photos: [...this.state.photos, ...photos] })
    }
  }
  componentDidMount(){
    document.querySelector('.App-photo-container').addEventListener('scroll', this.handleScroll)
  }
  componentWillUnmount(){
    document.querySelector('.App-photo-container').removeEventListener('scroll', this.handleScroll)
  }
  render() {
    // console.log(process.env.REACT_APP_UNSPLASH_API_KEY)
    const { photos, keyword } = this.state 
    return (
      <div className='App'>
        <form className='App-search-container'>
          <input type="text" value={keyword} onChange={this.handleChange} placeholder="검색어 입력"/>
          <button type="submit" onClick={this.searchPhotos}>검색</button>
        </form>
       
        <div className='App-photo-container'>
          {photos.length === 0 ? 
            <div>원하시는 사진을<br/> 검색창에서 찾아보세요 !</div>
          : photos.map(photo => <img 
                                  key={photo.id} 
                                  className="App-photo-item" 
                                  src={photo.urls.small}
                                  alt={photo.alt_description}/>)}
        </div>
      </div>
    );
  }
}

export default App;