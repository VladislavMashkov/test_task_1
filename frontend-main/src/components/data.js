export default {
		"id" : 1,
		"name": "Квартира или доля",
		"alias": "kvartira-ili-dolya-moskva-1",
		"organization": {
			"name": "Росбанк Дом",
			"license": "2272",
			"logo": "https://s91588.cdn.ngenix.net/organizations/logotypes/web/5bb4f767245bc22a520a606f.svg"
		},
		"customerRequirements": {
			"documents": 2,
			"age": 21,
			"manAgeAtRepayment": 65,
			"femaleAgeAtRepayment": 65,
			"lastExperience": 6,
			"fullExperience": 0,
			"salary": 0
		},
		"rate": {
			"periods": [
				{
					"rate": {
						"from": 8.85,
						"to": 9.1
					},
					"termUnit": "month",
					"term": {
						"from": 36,
						"to": 300
					},
					"isFloatingRate": false
				}
			],
			"currency": "RUB",
			"creditAmount": {
				"from": 7000000
			},
			"initialAmount": {
				"from": 20
			}
		}
	}