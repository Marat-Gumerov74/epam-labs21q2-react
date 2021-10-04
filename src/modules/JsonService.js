export class JsonService {
    _apiBase = 'https://jsonplaceholder.typicode.com';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) throw new Error(`Could not fetch ${url}, received ${res.status}`)
        return await res.json()
    }

    async getAllAlbums() {
        return await this.getResource(`/albums`)
    }

}
