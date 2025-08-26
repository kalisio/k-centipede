#!/usr/bin/env bash
set -euo pipefail

# run jobs
krawler ./jobfile.js
# Set a specific value for the TTL
export TTL="604800"
krawler ./jobfile.js