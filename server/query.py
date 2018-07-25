import psycopg2

hostname = 'localhost'
username = 'postgres'
password = 'postgres'
database = 'psndb'


def query(conn):
    cur = conn.cursor()
    cur.execute("""select * from psndb""")
    rows = cur.fetchall()

    for row in rows:
        print(row[1])


conn = psycopg2.connect(host=hostname, user=username,
                        password=password, dbname=database)
query(conn)
conn.close()
