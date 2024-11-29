// Simulated in-memory object database with seeded examples
const db = {
    users: [
        { id: 1, name: 'Alice', email: 'alice@example.com', role: 'admin', password: 'hashedPassword1' },
        { id: 2, name: 'Bob', email: 'bob@example.com', role: 'user', password: 'hashedPassword2' },
    ],
    places: [
        { id: 1, name: 'Pasta Palace', city: 'Rome', state: 'Italy', cuisines: 'Italian', founded: 2020 },
        { id: 2, name: 'Burger Barn', city: 'Austin', state: 'Texas', cuisines: 'American', founded: 2018 },
    ],
    comments: [
        { id: 1, placeId: 1, content: 'Amazing food and great service!', rant: false, authorId: 1 },
        { id: 2, placeId: 2, content: 'Not impressed with the cleanliness.', rant: true, authorId: 2 },
    ],
};

module.exports = db;

