//Install npm install --save-dev @cypress-audit/lighthouse

it.only("Lighthouse Testing", () => {
    cy.visit("https://www.google.com/");
    // set your treshold
    // Thresholds are pass/fail criteria that specify the performance expectations of the system under test.
    cy.lighthouse(
        {
            performance: 10,
            accessibility: 79,
            "best-practices": 80,
            seo: 80,
        },
        {
            formFactor: "desktop",
            screenEmulation: {
                mobile: false,
                disable: false,
                width: cy.config("viewportWidth"),
                height: cy.config("viewportHeight"),
                deviceScaleRatio: 1,
            },
            throttling: {
                rttMs: 40,
                throughputKbps: 11024,
                cpuSlowdownMultiplier: 0,
                requestLatencyMs: 0,
                downloadThroughputKbps: 0,
                uploadThroughputKbps: 0,
            },
        }
    );
});
