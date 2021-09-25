export class JsonService {
    _apiBase = 'https://jsonplaceholder.typicode.com';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) throw new Error(`Could not fetch ${url}` + `, received ${res.status}`)
        return await res.json()
    }

    // async getAllUsers() {
    //     return await this.getResource(`/users`)
    // }
    //
    // async getUser(id) {
    //     return await this.getResource(`/users/${id}`)
    // }

    async getAllAlbums() {
        return await this.getResource(`/albums`)
    }

    async getAlbum(id) {
        return await this.getResource(`/albums/${id}`)
    }

}
