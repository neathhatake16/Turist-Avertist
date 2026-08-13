.PHONY: dev build start lint install clean

dev:
	cd frontend && npm run dev

build:
	cd frontend && npm run build

start:
	cd frontend && npm run start

lint:
	cd frontend && npm run lint

install:
	cd frontend && npm install

clean:
	rm -rf frontend/.next
