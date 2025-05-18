/**
 * Runs automatically when the sheet is edited
 * Changes tab color based on these conditions:
 * - Only applies to sheets with 👽 emoji in the tab name
 * - Dark green 1: Less than or equal to 5 rows with empty cells in F,G,H,I
 * - Dark orange 1: More than 5 rows with empty cells in F,G,H,I
 */
function onEdit(e) {
    // Get the edited sheet
    var sheet = e.source.getActiveSheet()
    var sheetName = sheet.getName()

    // Only process sheets with 👽 emoji in their name
    if (!sheetName.includes('👽')) {
        return // Exit the function if the sheet name doesn't contain the alien emoji
    }

    // Get data range (all cells with content and surrounding empty cells)
    var dataRange = sheet.getDataRange()
    var values = dataRange.getValues()

    // Default color is dark green 1
    var tabColor = '#0f9d58' // Google Sheets Dark green 1

    // Counter for rows with empty cells
    var emptyRowCount = 0

    // Check for rows that have data in columns C and D but empty cells in F, G, H, I
    for (var i = 0; i < values.length; i++) {
        var row = values[i]

        // Skip header row if needed
        if (i === 0) continue

        // Check if row has data in both columns C and D (indices 2 and 3)
        // Ignore column A as it may just contain sequential numbers
        if (row[2] !== '' && row[3] !== '') {
            // Row has meaningful data in C and D, now check if F, G, H, I are ALL empty
            if (
                row[5] === '' &&
                row[6] === '' &&
                row[7] === '' &&
                row[8] === ''
            ) {
                emptyRowCount++

                // If we've found more than 5 rows with empty cells, change color and exit loop
                if (emptyRowCount > 5) {
                    tabColor = '#e67c73' // Google Sheets Dark orange 1
                    break
                }
            }
        }
    }

    // Set the tab color
    sheet.setTabColor(tabColor)
}
