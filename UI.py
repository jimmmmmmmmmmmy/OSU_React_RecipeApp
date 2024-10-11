import time
from http.server import BaseHTTPRequestHandler, HTTPServer
import json
import urllib.parse

class SimpleHTTPRequestHandler(BaseHTTPRequestHandler):
    def do_POST(self):
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)
        data = json.loads(post_data.decode('utf-8'))
        
        username = data.get('username', '')
        password = data.get('password', '')

        with open("username.txt", 'w') as f:
            f.write(username)
        
        with open("password.txt", 'w') as f:
            f.write(password)

        time.sleep(4)

        with open('status.txt', 'r') as f:
            status = f.read().strip()

        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.end_headers()
        response = json.dumps({'status': status})
        self.wfile.write(response.encode('utf-8'))

def run(server_class=HTTPServer, handler_class=SimpleHTTPRequestHandler, port=8000):
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)
    print(f"Server running on port {port}")
    httpd.serve_forever()

if __name__ == '__main__':
    run()