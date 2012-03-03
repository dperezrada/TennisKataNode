all:
	@./node_modules/expresso/bin/expresso

api:
	@./node_modules/expresso/bin/expresso ./test/test_api.js

object:
	@./node_modules/expresso/bin/expresso ./test/test_object.js

.PHONY: all