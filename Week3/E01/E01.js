// // Exercise 1 : Normalization

// The manager of the dinner club would like to manage the information system that assists him to keep track of who attends the dinners. Because the manager is not an expert of Information Systems, (s)he uses the following table to store the information. Please help the manger by using the knowledge of database normal forms. Show step by step

// +-----------+---------------+----------------+-----------+-------------+------------+-------------------+-----------+------------------+
// | member_id | member_name   | member_address | dinner_id | dinner_date | venue_code | venue_description | food_code | food_description |
// +-----------+---------------+----------------+-----------+-------------+------------+-------------------+-----------+------------------+
// |         1 | Amit          | 325 Max park   | D00001001 | 2020-03-15  | B01        | Grand Ball Room   | C1, C2    | Curry, Cake      |
// |         2 | Ben           | 24 Hudson lane | D00001002 | 2020-03-15  | B02        | Zoku Roof Top     | S1, C2    | Soup, Cake       |
// |         3 | Cristina      | 516 6th Ave    | D00001002 | 2020-03-15  | B02        | Zoku Roof Top     | S1, C2    | Soup, Cake       |
// |         4 | Dan           | 89 John St     | D00001003 | 2020-03-20  | B03        | Goat Farm         | P1, T1, M1| Pie, Tea, Mousse |
// |         5 | Ema           | 91 Pixar St    | D00001003 | 2020-03-20  | B03        | Goat Farm         | P1, T1, M1| Pie, Tea, Mousse |
// |         6 | Fatima        | 56 8th Ave     | D00001004 | 2020-03-20  | B04        | Mama's Kitchen    | F1, M1    | Falafal, Mousse  |
// |         7 | Gabor         | 54 Vivaldi St  | D00001005 | 2020-02-20  | B05        | Hungry Hungary    | G1, P2    | Goulash, Pasca   |
// |         8 | Hema          | 9 Peter St     | D00001003 | 2020-03-20  | B03        | Goat Farm         | P1, T1, M1| Pie, Tea, Mousse |
// +-----------+---------------+----------------+-----------+-------------+------------+-------------------+-----------+------------------+



// How can you convert the table into 1NF ?
// 1. divide the member address to (street name, house number)
// 2. divide food code and food description
// (just write everything all over again if there's a new food, or bring in a sug table with food_code as primary key)


// What are the super, candidate, primary keys ?
/*
1. super keys: {
    member_id | member_name   | member_address | dinner_id | dinner_date | venue_code | venue_description | food_code | food_description |
}
2. candidate keys：{member_id, dinner_id}(not sure whether I should include venue_code and food_code)
3. primary key: member_id
*/

// What are the potential relationships between different possible tables ?
/*
I think there should be 4 tables(member， dinner， food, venue)with dinner as the main one 
*/

// How can you develop the set of 2NF tables?
/*
1. table 1(dinner_id, dinner_date, member_id, member name)--(still there is transitive dependency)
2. table 2(venue_code,venue_description)
3. table 3(food_code, food_description)
*/

// How can you develop the set of 3NF tables?
/*
1. table 1(dinner_id, dinner_date )
2. table 2(member_id, member name)
3. table 3(venue_code,venue_description)
4. table 4(food_code, food_description)
*/

