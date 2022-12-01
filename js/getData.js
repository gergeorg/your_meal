export const getData = async (url) => {
	const res = await fetch(url)

	if (res.ok) {
		return res.json()
	}
}
