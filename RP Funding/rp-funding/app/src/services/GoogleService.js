const baseMapsUrl = 'https://www.google.com/maps/place'

const googleInterface = {
  openGoogleMaps(address) {
    const url = address.trim().replace(' ', '+')
    window.open(`${baseMapsUrl}/${url}`, '_blank')
  },
}

export default googleInterface
