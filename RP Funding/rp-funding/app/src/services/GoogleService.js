const baseMapsUrl = 'https://www.google.com/maps/place'

const googleInterface = {
  openGoogleMaps(address) {
    const url = address.replace(' ', '+')
    window.open(`${baseMapsUrl}/${url}`, '_blank')
  },
}

export default googleInterface
