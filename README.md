# Google Sheets Tab Color Script

## Overview
This Apps Script automatically changes tab colors in Google Sheets based on data completeness:
- **Dark green tab**: Less than or equal to 5 rows have all F-I cells empty
- **Dark orange tab**: More than 5 rows have all F-I cells empty

## How It Works
1. Only applies to sheets with 👽 emoji in the tab name
2. Only evaluates rows with data in both columns C and D
3. Ignores column A (typically used for row numbers)
4. Runs automatically when any edit is made to the sheet

## Installation
1. Open your Google Sheet
2. Go to Extensions > Apps Script
3. Paste the script code
4. Save the project
5. Close and refresh your sheet

No manual triggers required - the script runs automatically on edits.

## Requirements
- Tab name must include 👽 emoji to be monitored
- Rows must have values in columns C and D to be evaluated
