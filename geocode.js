const fs = require('fs');
const csv = require('csv-parser');

const results = [];

fs.createReadStream('Teachers-Data-opencage-geocoded-7268073141.csv')
  .pipe(csv())
  .on('data', (row) => {
    results.push({
      name: row['Name'],
      price: row['Price'],
      hobby: row["Hobbies"],
      address: row['Address'],
      location: row['Location'],
      lat: parseFloat(row['Latitude']),
      lng: parseFloat(row['Longitude']),
    });
  })
  .on('end', () => {
    const output = `const teacherLocations = ${JSON.stringify(results, null, 2)};`;
    fs.writeFileSync('public/js/TeachersData.js', output);
    console.log('✅ TeachersData.js created successfully!');
  });
