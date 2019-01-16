    "bump.changelog.open": true,
    "bump.scripts.precommit": "./prepare-checkin.sh",
    "bump.tag.enabled": true,
    "bump.changelog.create": true,
    "bump.files": {
        "./XyZZy": ["bla(blubb)", "foo[version]bar"],
        "./test.test": [ "Bla:\\s*(.*)", "Bla: [version]" ],
        "./src/index.ts": [
            ["Mechanic ([0-9.-]+)","Mechanic [version]"],
            ["Copyright © ([0-9-]+)","Copyright © [date]"]
        ]
    }
