init:
	git submodule init
	git submodule update
	cd bootstrap/ && npm install

# Get the latest version and build it
update:
	cd bootstrap && git pull && make bootstrap
	# We only copy the concatenated versions as Meteor will compress the files during deploy or bundle
	cp bootstrap/bootstrap/css/bootstrap.css css/
	cp bootstrap/bootstrap/css/bootstrap-responsive.css css/
	cp bootstrap/bootstrap/js/bootstrap.js js/
	cp bootstrap/font/* font/
	cp bootstrap/img/* img/
	# Delete the build dir so we can easily run update again
	rm -rf bootstrap/bootstrap
