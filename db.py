from sqlalchemy import *

# http://www.rmunn.com/sqlalchemy-tutorial/tutorial.html
db = create_engine('sqlite:///tutorial.db')

db.echo = False  # Try changing this to True and see what happens

# Before creating our Table definitions, we need to create the object that will manage them. 
# Table definitions (what the columns are called, what their data types are) are an example of "metadata" -- 
# information about your data. So the object that manages this collection of metadata is called a MetaData object. 
# There are two varietes, BoundMetaData which is tied to a specific database connection, 
# or DynamicMetaData which can be created before the database connection has been established.

metadata = BoundMetaData(db)

# Create Users Table
users = Table('wines', metadata,
    Column('id', Integer, primary_key=True),
    Column('name', String),
    Column('year', Integer),
    Column('vineyard', String),
    Column('price', String),
    Column('attribute', String),
    Column('labelImg', String)
)


users.create()
# If the users table already existed, we could instead have done:
# users = Table('users', metadata, autoload=True)


i = users.insert()
i.execute(name='Mary', age=30, password='secret')
i.execute({'name': 'John', 'age': 42},
          {'name': 'Susan', 'age': 57},
          {'name': 'Carl', 'age': 33})

s = users.select()
rs = s.execute()

row = rs.fetchone()
print 'Id:', row[0]
print 'Name:', row['name']
print 'Age:', row.age
print 'Password:', row[users.c.password]

for row in rs:
    print row.name, 'is', row.age, 'years old'